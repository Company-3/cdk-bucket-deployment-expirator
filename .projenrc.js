const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  authorAddress: 'kcswinner@gmail.com',
  authorName: 'Ken Winner',
  name: 'cdk-bucket-deployment-expirator',
  description: 'Opinionated CDK Bucket Deployment object pruner for maintaining N old versions',
  repository: 'https://github.com/kcwinner/cdk-bucket-deployment-expirator.git',
  catalog: {
    twitter: 'KenWin0x539',
  },
  defaultReleaseBranch: 'main',
  codeCov: true,
  dependabotOptions: {
    ignore: [
      { dependencyName: '@aws-cdk*' },
    ],
  },

  cdkVersion: '2.68.0',
  devDeps: [
    'aws-sdk',
    'aws-sdk-mock',
    'esbuild',
    'nock',
  ],

  gitignore: [
    '.build',
    '.venv',
  ],

  python: {
    distName: 'cdk-bucket-deployment-expirator',
    module: 'cdk_bucket_deployment_expirator',
  },
});

project.addTask('clean', {
  exec: 'rm -rf .build',
});

project.projectBuild.preCompileTask.exec(
  'yarn run clean && esbuild lambda/src/index.ts --bundle --outdir=.build/ --target=node18 --platform=node',
);

project.synth();
