import crypto from 'crypto'
import { kafka } from "@src/main/client";
import { CompressionTypes } from 'kafkajs';

async function recordRandomText (){
    
    const randomText = crypto.randomBytes(12).toString('hex')
    
    const producer = kafka.producer();
    
    await producer.connect()
    await producer.send({
        topic: 'message-kafka',
        compression: CompressionTypes.GZIP,
        messages: [
            {
                key: 'key-val',
                value: randomText
            }
        ]
    })
    await producer.disconnect()
}

export { recordRandomText }