const { awscdk } = require('projen');
const { CodeArtifactAuthProvider } = require('projen/lib/release');

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
  depsUpgrade: false,
  dependabot: false,
  cdkVersion: '2.232.1',
  jsiiVersion: '~5.9.0',
  devDeps: [
    'aws-sdk',
    'aws-sdk-mock',
    'esbuild',
    'nock',
  ],
  gitignore: [
    '.build',
    '.venv',
    '.idea',
  ],
  license: 'Apache-2.0',
  releaseToNpm: false,
  publishToPypi: {
    distName: 'cdk-bucket-deployment-expirator',
    module: 'cdk_bucket_deployment_expirator',
    twineRegistryUrl: 'https://co3infra-697184679576.d.codeartifact.us-east-1.amazonaws.com/pypi/co3-python-tools/',
    codeArtifactOptions: {
      authProvider: CodeArtifactAuthProvider.GITHUB_OIDC,
      roleToAssume: '${{ secrets.ARTIFACT_ROLE }}',
    },
  },
});

project.addTask('clean', {
  exec: 'rm -rf .build',
});

project.projectBuild.preCompileTask.exec(
  'yarn run clean && esbuild lambda/src/index.ts --bundle --outdir=.build/ --target=node18 --platform=node',
);

project.synth();
