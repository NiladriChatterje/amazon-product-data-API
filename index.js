const express = require('express');
const request = require('request-promise');

const API='8daf8bede19852fe83a8b676495bf738';
const getBaseURL = (apikey)=>`http://api.scraperapi.com?api_key=${apikey}&autoparse=true`;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get('/',(req,res)=>{
        res.send('Hi This Is Niladri. Welcome to my Scrapper API');
});

app.get('/product/:productId?',async (req,res)=>{
    const {productId} = req.params;
    const {apikey} = req.query;
    try{
        const response = await request(`${getBaseURL(apikey)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});

app.get('/product/:productId/reviews',async (req,res)=>{
    const {productId} = req.params;
    const {apikey} = req.query;
    try{
        const response = await request(`${getBaseURL(getBaseURL(apikey))}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});

app.get('/product/:productId/productOffers',async (req,res)=>{
    const {productId} = req.params;
    const {apikey} = req.query;
    try{
        const response = await request(`${getBaseURL(apikey)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});

app.get('/search/:searchQuery',async (req,res)=>{
    const {searchQuery} = req.params;
    const {apikey} = req.query;
    try{
        const response = await request(`${getBaseURL(apikey)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});

app.listen(PORT,()=>{console.log('Confirmation that PORT is Not engaged')})