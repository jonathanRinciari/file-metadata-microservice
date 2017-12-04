# File Metadata Microservice

##Objectives

The *Objective* of the api is to allow the user to search for a image phrase using the google custom search api. The user will then receive back a link, snippet, thumbnail, and context for the search.

The api will also log the search entered by the user and store the phrase and date of the search.

 1. The api upload form is accessed at ../api/upload/ select a file from your computer and submit
 
 2. The search history can be accesed through the ../api/latest router It will return the last 10 searches, with the term and date

## User Stories 

1. I can submit a FormData object that includes a file upload.

2. When I submit something, I will receive the file size in bytes within the JSON response

## Examples 
1. [https://warm-gorge-32119.herokuapp.com/api/imagesearch/yoda](https://warm-gorge-32119.herokuapp.com/api/imagesearch/yoda)

2. [https://warm-gorge-32119.herokuapp.com/api/latest](https://warm-gorge-32119.herokuapp.com/api/latest)
