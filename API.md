# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BucketDeploymentExpirator <a name="BucketDeploymentExpirator" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator"></a>

#### Initializers <a name="Initializers" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer"></a>

```typescript
import { BucketDeploymentExpirator } from 'cdk-bucket-deployment-expirator'

new BucketDeploymentExpirator(scope: Construct, id: string, props: BucketDeploymentExpiratorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps">BucketDeploymentExpiratorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps">BucketDeploymentExpiratorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.isConstruct"></a>

```typescript
import { BucketDeploymentExpirator } from 'cdk-bucket-deployment-expirator'

BucketDeploymentExpirator.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpirator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-bucket-deployment-expirator.BucketDeploymentExpirator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### BucketDeploymentExpiratorProps <a name="BucketDeploymentExpiratorProps" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps"></a>

#### Initializer <a name="Initializer" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.Initializer"></a>

```typescript
import { BucketDeploymentExpiratorProps } from 'cdk-bucket-deployment-expirator'

const bucketDeploymentExpiratorProps: BucketDeploymentExpiratorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.bucketDeployment">bucketDeployment</a></code> | <code>aws-cdk-lib.aws_s3_deployment.BucketDeployment</code> | The CDK Bucket Deployment Construct. |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket to remove old deployments from. |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.deploymentsToKeep">deploymentsToKeep</a></code> | <code>number</code> | The number of old deployments to keep. |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.metaLookupKey">metaLookupKey</a></code> | <code>string</code> | The S3 metadata key to look for as a timestamp. |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.removeUnmarked">removeUnmarked</a></code> | <code>boolean</code> | Whether or not to remove items without a metadata key. |
| <code><a href="#cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |

---

##### `bucketDeployment`<sup>Required</sup> <a name="bucketDeployment" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.bucketDeployment"></a>

```typescript
public readonly bucketDeployment: BucketDeployment;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.BucketDeployment

The CDK Bucket Deployment Construct.

Required to addDependency

---

##### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket to remove old deployments from.

---

##### `deploymentsToKeep`<sup>Optional</sup> <a name="deploymentsToKeep" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.deploymentsToKeep"></a>

```typescript
public readonly deploymentsToKeep: number;
```

- *Type:* number
- *Default:* 3

The number of old deployments to keep.

---

##### `metaLookupKey`<sup>Optional</sup> <a name="metaLookupKey" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.metaLookupKey"></a>

```typescript
public readonly metaLookupKey: string;
```

- *Type:* string
- *Default:* "deployed"

The S3 metadata key to look for as a timestamp.

---

##### `removeUnmarked`<sup>Optional</sup> <a name="removeUnmarked" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.removeUnmarked"></a>

```typescript
public readonly removeUnmarked: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to remove items without a metadata key.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-bucket-deployment-expirator.BucketDeploymentExpiratorProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is automatically created

Execution role associated with this function.

---



