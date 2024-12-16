export default function page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam</h1>  
      <form>
        <label htmlFor="product" className="ml-5">Student Name</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-orange-400"/>
        <br />
        <label htmlFor="product" className="ml-5">Course Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-orange-400"/>
        <br />
        <label htmlFor="instructors" className= "mx-5 text-white" >Choose your Instructor:</label>
        <select name="instructors" id="instructors">
        <option value="carol">Carol Vasquez</option>
        <option value="biane">Biane Pancho</option>
        <option value="mercedes">Mercedes Flores</option>
        <option value="carmen">Carmen Rodriguez</option>
        </select>
        <br />
        <div className="ml-5 mt-5">
        <h1 className="text-1xl mx-5">Choose your Schedule</h1> 
        <input type="radio" id="morning" name="schedule" value="MORNING" />
        <label htmlFor="morning">Morning</label><br />
        <input type="radio" id="afternoon" name="schedule" value="AFTERNOON" />
        <label htmlFor="afternoon">Afternoon</label><br />
        <input type="radio" id="evening" name="schedule" value="EVENING" />
        <label htmlFor="evening">Evening</label>
        </div>
        <br />
        <div className="ml-5 mt-5"> 
        <h1 className="text-1xl mx-5">Programs!!!</h1> 
        <input type="checkbox" id="program1" name="program1" value="Family" />
        <label htmlFor="program1"> Family Swim</label><br />
        <input type="checkbox" id="program2" name="program2" value="Free" />
        <label htmlFor="program2"> Free Intro to Goldfish</label><br />
        <input type="checkbox" id="program3" name="program3" value="Jump" />
        <label htmlFor="program3"> Jump Start Clinics</label>
        <input type="checkbox" id="program4" name="program4" value="Party" />
        <label htmlFor="program4"> Parties</label>
        </div>
        <br />
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-orange-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-10" type="submit">Submit</button>
      </form>
      </>
    );
  }
  