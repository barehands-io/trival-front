export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5100/riddle/index");
  const data = (await res.json()) as string;
  return {
    props: {
      data,
    },
  };
};

interface Props {
  riddle: string;
  answer: string;
  explanation: string;
}

export default function RiddlesPage({ data }: any) {
  return (
    <div>
      <div className="flex h-screen  flex-col ">
        <div className="m-auto">
          <div className="space-y-6">
            <div>
              {data.riddles.map((item: any, index: any) => {
                return (
                  <div key={index}>
                
                    {/* <p>{item.explanation}</p> */}
                    <h1 className="text-3xl italic">
                    {item.riddle}
                    </h1>

                    <p className="text-xl">
                    {item.answer}
                    </p>
                    <p>

                    {item.explanation}
                        
                        </p>
                  </div>
                );
              })}
            </div>
            <button className="cursor-pointer rounded-md bg-slate-800 p-3">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
