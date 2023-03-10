# Planning Module

## **How to start server and tests**

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

   **Required:**
  
    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200


### **Get api/locations**

  Returns json data about available locations.

* **URL**

  /api/location?activity_id = [integer]

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `activity_id = [integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200