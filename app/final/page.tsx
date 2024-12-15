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
        <label htmlFor="instructors" className= "ml-5 text-black" >Choose your Instructor:</label>

        <select name="instructors" id="instructors">
        <option value="carol">Carol Vasquez</option>
        <option value="biane">Biane Pancho</option>
        <option value="mercedes">Mercedes Flores</option>
        <option value="carmen">Carmen Rodriguez</option>
        </select> 
        <br />
        <h1 className="text-1xl ml-5">Choose your Schedule</h1> 
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">Morning</label><br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">Afternoon</label><br />
        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
        <label htmlFor="javascript">Evening</label>
        <br />
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-orange-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-10" type="submit">Save</button>
      </form>
      </>
    );
  }
  