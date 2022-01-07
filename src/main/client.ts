import { Kafka, logLevel } from "kafkajs"

const kafka = new Kafka({
    clientId: 'kafka-client',
    brokers: ['localhost:9092'],
    logLevel: logLevel.INFO,
    retry:{
        initialRetryTime: 300,
        retries: 10
    }
})

export { kafka }