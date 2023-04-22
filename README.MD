# FULL CYCLE DESAFIO GO LANG

Ao executar a imagem docker termos o seguinte resultado: # Full Cycle Rocks!!

Uma parte do desafio era fazer com que a imagem go tivesse menos de 2mb

## Como Utilizar o código

1º - inicie o dockerfile
```
docker build -t fullcycle:go .
```
2º - Iremos dar run na nossa imagem fullcycle:go 

```
docker run -dit --name go fullcycle:go
```
Ao rodar esses comando teremos a frase Full Cycle Rocks na tela

## Dockerfile MultiStage

O multistage está sendo execultado no proprio dockerfile, para redução do tamanho da imagem.

## Para realizar o download da imagem

```
docker pull afmatheus/go
```
caso queira fazer a propria imagem do dockerfile.prod, só executar os seguinte comandos

```
docker build -t afmatheus:go . 
```
depois para executar o container 

```
docker run --name go -it afmatheus:go 
```
Pronto no final deverá aparecer 

```
Full Cycle Rocks!!
```
## Tamanho da imagem

1.82MB

Utilizando a imagem do linux scratch

Link do docker[https://hub.docker.com/r/afmatheus/go]