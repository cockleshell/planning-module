# Planning Module

## **How to start server and tests**

### Run Server

Go to */workspaces/planning-module/app* and use command **yarn run start**

### Run Tests

Open directory with tests and use command **yarn run test**

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

  * **Code:** 200 <br />
  * **Check:** array is not empty - pass

```
{
    "data": [
        {
            "title": "Service&maintenance",
            "id": "01",
            "imageUrl":"http://google.com/img.jpg"
        },
        {
            "title": "Support",
            "id": "02",
            "imageUrl":"http://google.com/tst.jpg"
        }
    ]
}
```



**Get locations**
----
  Returns json data about available locations.

* **URL**

  /api/locations

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `activity_id = [integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  * **Check:** array is not empty - pass

```
{
    "data": [
        {
            "activity_id": 1,
            "title": "Lviv",
            "location_id": 1,
            "imageUrl":"http://google.com/img.jpg"
        },
        {   "activity_id": 1,
            "title": "Odesa",
            "location_id": 2,
            "imageUrl":"http://google.com/tst.jpg"
        }
    ]
}
```