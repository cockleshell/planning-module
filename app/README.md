# Planning Module

## **How to start server**

### Run Server

Go to */app* and use command **yarn run start**


## **API routes**

### **List of activities** 

  Returns json data about available activities.

* **URL**

  /api/activities

* **Method:**

  `GET`
  
* **URL Params**

   #### **Required:**
  
    `language = [string]`

* **Success Response:**

  * **Code:** 200

    **Content:** 
    ```
    {
      "data": [
          {
              "title": "Service&maintenance",
              "id": 1,
              "imageUrl":"http://google.com/img.jpg"
          },
          {
              "title": "Support",
              "id": 2,
              "imageUrl":"http://google.com/tst.jpg"
          }
              ]
    }
    ```

  * **Code:** 204

    **Content:** None

* **Error Response:**

  * **Code:** 400
     
    **Content:**       
    ```
    { 
      "errors" : [
        {
          "code" : "LANGUAGE_NOT_FOUND",
          "message" : "Language is not provided"
        }
      ]
    }
    ```


### **List of locations**

  Each activity has its own list of available locations.

  Returns json data about available locations based on select activity.

  
* **URL**

  /api/locations

* **Method:**

  `GET`
  
* **URL Params**

   **Required:**

   `activity_id = [integer]`

   `language = [string]`

* **Success Response:**

  * **Code:** 200
  
    **Content:** 

    ```
    {
      "data": [
        {
          "title": "Lviv",
          "id": 1,
          "imageUrl": "http://google.com/img.jpg"
        },
        {
          "title": "Odesa",
          "id": 2,
          "imageUrl": "http://google.com/tst.jpg"
        }
      ]
    }
    ```

  * **Code:** 204
    
    **Content:** None  

* **Error Response:**

  * **Code:** 400
    
    **Content:** 
    ```
    { 
      "errors" : [
        { 
          "code" : "ACTIVITY_NOT_FOUND",
          "message" : "Activity is not provided."
        },
        {
          "code" : "LANGUAGE_NOT_FOUND",
          "message" : "Language is not provided"
        }
      ]
    }
    ```
  
  * **Code:** 404

    **Content:** 
    
    ```
    {
      "errors": [
        {
          "code": "ACTIVITY_NOT_AVAILABLE",
          "message": "Activity is not available"
        }
      ]
    }
    ```


