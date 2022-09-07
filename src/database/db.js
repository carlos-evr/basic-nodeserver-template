import { MongoClient } from 'mongodb';

const DB_NAME = '<<write your DB name here>>';

export const db = {
    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,
            wtimeoutMS: 2500,
            useUnifiedTopology: true,
        });
        this._dbClient = client;
    }, 
    getConnection: function() {
        if (!this._dbClient) {
            console.log('You need to call the connect() function first!');
            process.exit(1);
        }

        return this._dbClient.db(DB_NAME);
    },
}
