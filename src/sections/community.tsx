export default function Community() {
  const reviews = [
    {
      fullName: 'Ujjwal T',
      jobTitle: 'Student',
      review: 'The resume created through this platform proved instrumental in securing an interview with PTC Company, eliciting positive feedback from the interviewer regarding standard of resume.',
    },
    {
      fullName: 'Mayur M',
      jobTitle: 'Student',
      review: 'This is an excellent platform with great resources and support. I love the intuitive design and ease of use of this platform.',
    },
    
  ];

  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-b-2 border-b-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Loved by people like you
        </h2>
        <div className="w900:grid-cols-1 w900:gap-0 grid grid-cols-2 gap-4 lg:gap-8">
          {reviews.map(({ jobTitle, fullName, review }, index) => (
            <div
              className="w900:min-h-20 w900:w-2/3 w900:mx-auto w500:w-full mb-4 min-h-48 w-full rounded-base border-2 border-black bg-bg p-5 shadow-base lg:mb-8"
              key={index}
            >
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-base border-2 border-black bg-gray-200 flex items-center justify-center text-lg font-heading">
                  {fullName[0]}
                </div>

                <div>
                  <h4 className="text-lg font-heading">{fullName}</h4>
                  <p className="text-sm font-base">{jobTitle}</p>
                </div>
              </div>
              <div className="mt-5">{review}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
