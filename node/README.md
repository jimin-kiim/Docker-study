### Dockerfile, image, registry
#### dockerfile 빌드 및 이미지 생성 
- docker build -t node-sample:latest .

#### 이미지 실행 통한 컨테이너 생성
- docker run -d -p [호스트 포트]:[컨테이너 포트] --name [컨테이너 이름] [이미지 이름]
- ```docker run -d -p 3000:3000 --name test-app node-sample```

#### 컨테이너 확인 
- docker ps
- docker ps -a

#### 컨테이너 종료
- docker stop [컨테이너 이름 or ID]
- ```docker stop test-app```

#### 컨테이너 다시 시작
- docker start [컨테이너 이름 or ID]
- ```docker start test-app```

#### 이미지 tagging
- docker tag [로컬 이미지]:[태그] [계정명]/[이미지 이름]:[태그]
- ```docker tag node-sample:latest kjmiim/node-sample:latest```

#### 레지스트리로의 이미지 push
- docker push [계정명]/[이미지 이름]:[태그]
- ```docker push kjmiim/node-sample:latest```

### Docker Compose
#### docker compose로 container 실행
- docker compose up -d

#### docker compose 목록 확인
- docker compose ps

#### docker compose service log 확인
- docker compose logs <service명>
- ```docker compose logs app-image```

#### docker compose container 중지
- docker compose down