import { consumerRandomText } from "@src/consumer/randomTextConsumer";
import { recordRandomText } from "../producer/randomTextProducer";

class Broker {
    public async run ():Promise<void>{
        await this.consumer()
        await this.producer()
    }

    private async producer():Promise<void>{
        await recordRandomText()
    }

    private async consumer():Promise<void>{
        await consumerRandomText()
    }
}

(async ()=>{
    const broker = new Broker()
    await broker.run()
})()
