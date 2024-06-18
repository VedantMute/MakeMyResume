import React from 'react'

export default function Education() {
  return (
    <>
    <div className="flex justify-between f12" >
        <div className="eduName">
            <div><b  contentEditable={true} >College of Engineering</b><span  contentEditable={true} >, Pune</span></div>
            <div><span  className="italic"  contentEditable={true} >Bachelors in Electronics and Telecommunication Engineering.</span> <span  contentEditable={true}  className='px-2'>Aggregate GPA : 8.50</span> </div>
        </div>
        <div  contentEditable={true}  className="eduNameYear">2025</div>
    </div>
    <div className="flex justify-between f12" >
        <div className="eduName">
            <div><b  contentEditable={true} >Your Sencondary College Name</b>,<span contentEditable={true}> City.</span></div>
            <div  contentEditable={true}  className="">12th MSBSC Percentage : 95.00</div>
        </div>
        <div  contentEditable={true}  className="eduNameYear">2021</div>
    </div>
    <div className="flex justify-between f12" >
        <div className="eduName">
            <div><b  contentEditable={true} >Your Primary School Name</b>,<span contentEditable={true}> City.</span></div>
            <div  contentEditable={true} >12th MSBSC Percentage : 95.00</div>
        </div>
        <div  contentEditable={true}  className="eduNameYear">2019</div>
    </div>
    </>
  )
}
