FROM golang as builder

WORKDIR /usr/src/app

COPY . .

RUN go build main.go

#PROD IMAGE
FROM scratch

COPY --from=builder /usr/src/app/main .

CMD ["./main"]