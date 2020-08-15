# AutoTrace

## what is this app
AutoTrace is written as an extension to the current [NZ COVID tracker app](https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-novel-coronavirus-resources-and-tools/nz-covid-tracer-app
) due to the manual nature of using the app on public transport, incorporating AutoTrace to the already existing app would allow or the app to track when you got on and off of public transport allowing for ease of contact tracing and improve the confidence of everyday transport users, to get moving again in an environmentally friendly way.

### how this app works
a resident would install the app and enable tracking when the user enters the geofence of a bus, they are considered on the bus, and the app reports this to our server so that we know when and where they joined what but, when the user leaves the bus geofence we keep that, from this, we can find all users who got on the bus at the same time as any user so if a user tests positive for COVID we can find all bus users they shared a bus with for contact tracing, this can be extended to any form of transport if given tracking data of there vehicles, this implementation is far easier for a user compared to the current solution of entering all the data manually something that a lot of kiwis will forget todo

The admin side of this app is for contact tracing use only. It allows for you to enter a user id and see all contacts and there contact details, along with the routes the infected users used allowing for broader contact tracing of people who don’t use the app.

## how to setup/install program

### webapp
#### requirements
node 

[download for your platform here](https://nodejs.org/en/download/)

vue 
```
npm install vue -g
```

for other dependency run this command in auto-trace-web-app folder
```
npm install
```
#### running the webapp

run the following commands in auto-trace-web-app in order to run webapp 
```
npm run serve
``` 


### flutter user app
#### requirements
flutter

[download here](https://flutter.dev/docs/get-started/install)


#### running the flutter app
[read how to run the app in your editor](https://flutter.dev/docs/get-started/editor)

## Datasets
these data sets made pinecone want to make public transport the default way or transport

[All NZ crash locations ](https://maphub.nzta.govt.nz/cas/)
[Public transport stats](https://catalogue.data.govt.nz/dataset/performance-of-public-transport-services/resource/f6385e02-5827-40f1-aceb-aa8d38b45039
)


[E-scooter injuries](https://catalogue.data.govt.nz/dataset/c303e9d5-7dae-40e7-a42e-c40d76bfd33a/resource/aa5837a6-b743-499f-8e2e-ca1e0f3bbc1c/download/52231-response.xlsm)


[Air pollution](https://catalogue.data.govt.nz/dataset/air-pollutant-emissions)

[Greenhouse gas emissions](https://www.stats.govt.nz/assets/Uploads/Greenhouse-gas-emissions-industry-and-household/Greenhouse-gas-emissions-industry-and-household-Year-ended-2018/Download-data/Greenhouse-gas-emissions-industry-and-household-year-ended-2018.xlsx)

[Road motor vehicle emissions ](https://catalogue.data.govt.nz/dataset/road-motor-vehicle-emissions)
[car/bike crash statistics](https://catalogue.data.govt.nz/dataset/mot-resources-road-safety-resources-roadcrashstatistics-monthlyoverviewofcrashstatistics)

[Level railroad crash  statistics](https://catalogue.data.govt.nz/dataset/mot-resources-road-safety-resources-roadcrashstatistics-raillevelcrossingstatistics)


