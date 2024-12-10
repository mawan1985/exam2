export default function enroll() {
  return (
    <>
      <h1 className="font-style: italic; m-4 text-orange-400"> Enroll now for Fun!</h1>
      <p className='font-serif mx-10 my-2 text-blue-300'>Choose from one of our curated lessons</p>
      <table>
      <tr>
      <td className='font-serif mx-10 text-orange-300'>Mini (baby)</td>
      <td>
      Lessons for the littlest fish</td>
      <td className='font-serif mx-10 text-orange-300'> 4-35 months</td>
      <td><button>Select</button></td>
      </tr>
      <tr> <td className='font-serif mx-10 text-orange-300'>Junior (beginner - intermediate)</td>
      <td>Dipping a toe into independent lessons</td>
      <td className='font-serif mx-10 text-orange-300'>3-4 years</td><td><button>Select</button></td>
      </tr> <tr> <td className='font-serif mx-10 text-orange-300'>Glider (beginner - intermediate)</td>
      <td>Learn swimming skills</td>
      <td className='font-serif mx-10 text-orange-300'>4-12 years</td>
      <td><button>Select</button></td></tr>
      <tr>
      <td className='font-serif mx-10 text-orange-300'> Pro (intermediate - advanced)</td>
      <td> Comfortable with a variety of swim skills</td>
      <td className='font-serif mx-10 text-orange-300'>4.5-12 years</td>
      <td><button>Select</button></td>
      </tr>
      <tr><td className='font-serif mx-10 text-orange-300'>Swim Force (swim team)</td>
      <td>Future competitive swimmers</td>
      <td className='font-serif mx-10 text-orange-300'>5-12 years</td>
      <td><button>Select</button></td></tr>
      </table>
    </>
  );
}