const client = mqtt.connect('ws://192.168.91.115:9001');

const topics = ['temperature', 'humidity', 'lux', 'WL'];

client.on('connect', () => {
    console.log('Conectado ao broker MQTT');
    client.subscribe(topics, (err) => {
        if (err) {
            console.error(`Erro na subscrição dos tópicos: ${err}`);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Mensagem recebida no tópico '${topic}': ${message.toString()}`);
});

