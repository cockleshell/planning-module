# Planning Module

## **How to start server**

### Run Server

Go to */workspaces/planning-module/app* and use command **yarn run start**


## **API routes**

### **GET /api/activities**

  Returns json data about available activities.

* **URL**

  /api/activities

* **Method:**

  `GET`
  
*  **URL Params**

   #### **Required:**
  
    `language = [EN/FR/NL/DE/PL]`

* **Success Response:**

  * **Code:** 200

* **Error Response:**

  * **Code:** 404
    
     **Content:** { error : "Activity is not available." }

  * **Code:** 422
     
     **Content:** { error : "Unprocessable Content." }


### **Get api/locations**

  Returns json data about available locations.

* **URL**

  /api/locations

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   Activity ID must be transmitted.
   Each activity has its own list of available locations.
 
   `activity_id = [integer]`

   `language = [EN/FR/NL/DE/PL]`

* **Success Response:**

  * **Code:** 200

* **Error Response:**

  * **Code:** 404

    **Content:** { error : "Location is not available." }

  * **Code:** 422
    
    **Content:** { error : "Unprocessable Content." }

