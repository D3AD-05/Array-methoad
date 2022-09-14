


  const data = [
    {
      "full_name" : "test",
      "id": 1,
      "email": "test@test.com",
      "gender": 'Male',
      "department": "Services",
      "age": 28
    },
    {
      "full_name" : "test",
      "id": 1,
      "email": "test@test.com",
      "gender": 'Male',
      "department": "Services",
      "age": 29
    },
    {
      "full_name" : "test",
      "id": 1,
      "email": "test@test.com",
      "gender": 'Male',
      "department": "Services",
      "age": 30
    },
    {
      "full_name" : "test",
      "id": 1,
      "email": "test@test.com",
      "gender": 'Male',
      "department": "Legal",
      "age": 31
    },
    {
      "full_name" : "test",
      "id": 1,
      "email": "test@test.com",
      "gender": 'female',
      "department": "Services",
      "age": 32
    },
  ]

  
  const getResult = (data, dep, gender) => {
    const filteredData = data.filter((data) => (data.department == dep && data.gender == gender)).sort((a,b) => a.age - b.age);
    console.log(filteredData);
    // console.log({
    //   [dep]: {
    //     [gender]: [...filteredData]
    //   }
    // })
    
  }

  getResult(data, "Services", "Male")