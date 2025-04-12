# SIT323  5.2D - Dockerization-Publishing the microservice into the cloud

## Image Details
- **Name**: `223957612/5.2d:sit323`
- **Registry**: Google Artifact Registry
- **Full Path**:  
  `australia-southeast2-docker.pkg.dev/sit323-25t1-zhu-e183433/sit323-2025-prac5d/223957612/5.2d:sit323`
- **Configure Permissions**：  
```bash
   gcloud auth login
   gcloud config set project sit323-25t1-zhu-e183433
```
 

## Steps to Push the Image

### 1. Build the Docker Image
```bash
docker build -t 223957612/5.2d:sit323 
```

### 2. Tag the Image
```bash
docker tag 223957612/5.2d:sit323 australia-southeast2-docker.pkg.dev/sit323-25t1-zhu-e183433/sit323-2025-prac5d/223957612/5.2d:sit323
```

### 3. Push to Artifact Registry
```bash
docker push australia-southeast2-docker.pkg.dev/sit323-25t1-zhu-e183433/sit323-2025-prac5d/223957612/5.2d:sit323
```

### 4. Verify the Image
```bash
gcloud artifacts docker images list australia-southeast2-docker.pkg.dev/sit323-25t1-zhu-e183433/sit323-2025-prac5d
```
