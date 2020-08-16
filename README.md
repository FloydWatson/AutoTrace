# AutoTrace
![Image of AutoTrace Logo](https://raw.githubusercontent.com/FloydWatson/AutoTrace/master/auto-trace-web-app/src/assets/auto_logo.png)
## What is this app?
AutoTrace is made as an extension to the current [NZ COVID tracker app](https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-novel-coronavirus-resources-and-tools/nz-covid-tracer-app
). Due to the manual nature of using the app on public transport, incorporating AutoTrace to the already existing NZ tracing app, would allow for the app to track when you get on and off of public transport. This allows for ease of contact tracing and improves the confidence of everyday transport users, to get the country moving again in an environmentally friendly way.

### How this app works
A resident would install the app and enable tracking. When the user enters the geofence of a bus, they are considered on the bus, and the app reports this to our server. This ensures  that we know when and where they boarded but also when and where the user leaves the bus geofence. From this, we can find all users who got on the bus at the same time as any other user. If a user then tests positive for COVID, we can find all shared bus users for contact tracing. This can be extended to any form of transport if given tracking data of their vehicles. This implementation is far easier for a user compared to the current solution of entering all the data manually, something that a lot of kiwis will forget to do.

The admin side of this app is for contact tracing use only. It allows for admin to enter a user_id and see all contacts and there contact details, along with the routes the infected users travelled allowing for broader contact tracing of people who don’t use the app.

# AutoTrace Data Story
## Introduction
When researching data about AutoTrace we looked into three main areas; traffic pollution, Aged use of public transport and the pandemics influence on the use of public transport to try to justify the need for this extension to the existing COVID tracing app. Below shows the journey we took to get to where we are now, and how we interpreted the data to enable us to see the need for this product.

### Quick Stats
| 100% | 70% | 90% | 44% |
|:---:|:---:|:---:|:---:|:---:|
|Increase in gold card usage on public transport in the last 10 years | Decrease in road traffic during the pandemic | Decrease in public transportation use during the pandemic | Repondants reasoning as to why they havent been using public transport during the pandemic |

### Aged Care Data
![Population by Age in NZ](https://raw.githubusercontent.com/FloydWatson/AutoTrace/development/auto-trace-web-app/src/assets/population.PNG)
![Bus Patronage With SuperGold Card Past 10 Years](https://i.imgur.com/lX647Md.png)
Looking at the above data we could see the need to look out for our elderly population, as they are the most at risk from this virus. By focusing mostly on protecting these vulnerable individuals, we can help ensure safer communities together.

This data above demonstrates just how many of the elderly population rely on public transportaion, which in turn shows the very reason why we need to make public transport a safer place.

This current deficiency in the COVID tracer app is exemplified here, and we at Pinecone aim to fill this deficiency by creating a solution that puts bus paassenegers at ease, knowing they can safely travel on puiblic transport again.

### Pollution Transit Data
![Emissions Data](https://raw.githubusercontent.com/FloydWatson/AutoTrace/development/auto-trace-web-app/src/assets/emissions.png)
![Public Transport usage in last year](https://i.imgur.com/CcVyZvh.png)
 Seeing this data helped motivate us to push for a cleaner environment, and to aim to build a solution that can help move society towards this goal. We have linked this idea of a cleaner environment to the use of public transport to build a solution that will encourage the use of public transport, and in turn reduce the pollution being pumped into our atmosphere.

### COVID-19 Data
![Public Transport Patronage During The Pandemic](https://i.imgur.com/jFabtD3.png)
![Survey Response About COVID-19](https://i.imgur.com/imV4cIL.png)
![Impact of COVID-19 on Public Transport](https://raw.githubusercontent.com/FloydWatson/AutoTrace/development/auto-trace-web-app/src/assets/public_transport_graph.png)
![Traffic Count during pandemic](https://i.imgur.com/tnsyMK4.png)
As we can see above there has been a huge drop in public transport usage because of the COVID-19 pandemic, mainly due to the fear of catching the virus. It is our aim to give the populous peace of mind to use these services, and to reduce the fear by assuring passengers that if there is a new case on the same trip as them, they would be notified by it.

We can also see the along with public transport being down during the pandemic, so has most other road traffic, our hopes is that as the country begins to move again, we can incentivise people to use public transport more, rather than their own individual vehicles. If we can achieve this we will be helping to create a cleaner, greener environment.

![Effect of Contact Tracing](https://marlin-prod.literatumonline.com/cms/attachment/011d0871-6f2a-45dc-93a7-db3e40929cdc/gr2.jpg)
As expected, there was no shortage of COVID-19 data sets avalable to us, but seeing them all tie in closely with public transport was a huge indicator to us that there is a gap here that needs to be filled, if we really want the population to seriously attempt to move to more widespread usage of public transport, we need a way to ease the fear of using it in these uncertain times. Because of this, we did a bit of research into the current contact tracing app and found major gaps, these being that it is not being used in public transprt at all and the frustration of having to manually scan QR codes. A little more digging and we found some data suggesting that contact tracing is an effective tool at suppressing the spread and risk of community transmission (Seen above)

### Summary
Based on all of the data we have found above, we saw a need to develop an extension to the existing COVID-19 contact tracing app here in New Zealand, with a focus on automating the process of using it, as well as having a specific interest in public transport, which the current version is sorely lacking. It is our hopes that this extension will be a supplementary way to achieve our other major aims of this project, these being a  cleaner, greener evironment, and safer communities for the aged in our population.

## How to setup/install program

### webapp
#### dependencies
node 

[download for your platform here](https://nodejs.org/en/download/)

vue 
```
npm install vue -g
```

for other dependencies run this command in auto-trace-web-app folder
```
npm install
```
#### running the webapp

run the following commands in auto-trace-web-app to run the webapp 
```
npm run serve
``` 


### flutter user app
#### dependencies
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



