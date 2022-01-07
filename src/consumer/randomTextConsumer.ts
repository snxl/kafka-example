import { kafka } from "@src/main/client";

async function consumerRandomText () {
    const consumer = kafka.consumer({groupId: 'random text'})

    await consumer.connect()
    await consumer.subscribe({topic: 'message-kafka', fromBeginning: true})
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key} # ${message.value}`)
        }
    })

}

export {consumerRandomText}