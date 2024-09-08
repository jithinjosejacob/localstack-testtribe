it("should create a S3 bucket", async () => {
    const container = await new LocalstackContainer().start();
  
    const client = new S3Client({
      endpoint: container.getConnectionUri(),
      forcePathStyle: true,
      region: "us-east-1",
      credentials: {
        secretAccessKey: "test",
        accessKeyId: "test",
      },
    });
    const input = {
      Bucket: "testcontainers",
    };
    const command = new CreateBucketCommand(input);
  
    const createBucketResponse = await client.send(command);
    expect(createBucketResponse.$metadata.httpStatusCode).toEqual(200);
    const headBucketResponse = await client.send(new HeadBucketCommand(input));
    expect(headBucketResponse.$metadata.httpStatusCode).toEqual(200);
  
    await container.stop();
  });