import { useState } from "react";
import Image from "next/image";

interface FunFactProps {
  fact: string;
  imageUrl: string;
  imageName: string;
}

interface Props {
  data: FunFactProps;
  endpointUrl: string;
}

const fetchFunFact = async (endpointUrl: string) => {
  try {
    const res = await fetch(`${endpointUrl}/api/fun-facts`);
    return (await res.json()).data;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const getStaticProps = async () => {
  const endpointUrl = process.env.APP_ENDPOINT_URL as string;
  const data = await fetchFunFact(endpointUrl);
  return {
    props: {
      data,
      endpointUrl,
    },
  };
};

export default function FunFactPage({ data, endpointUrl }: Props) {
  const dummy = {
    fact: "\n\nThe Galapagos Islands are home to some of the highest levels of endemic species in the world, with nearly 70% of the land mammals and 30% of the plant species found nowhere else on Earth!",
    imageUrl:
      "https://res.cloudinary.com/dmjluoznt/image/upload/v1674715214/_Galapagos_Islands_Endemic_Species.jpg.png",
    imageName: "_Galapagos_Islands_Endemic_Species.jpg",
  };
  const [funFact, setFunFact] = useState(data);
  const [loading, setLoading] = useState(false);
  const handleRegenerate = async () => {
    setLoading(true);
    const newData = await fetchFunFact(endpointUrl);

    console.log("regenerate", newData);

    setFunFact(newData);
    setLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "72px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle, rgba(2, 11, 21, 1) 0%, rgba(8, 61, 85, 1) 76%)",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <div className="container relative mx-auto pt-20 text-center">
              <div className="">
                <h1 className="py-6 text-xl">
                  Here is a Fun Fact you probably didnt know
                </h1>
                <h1 className="text-xl"> {funFact.fact}</h1>
              </div>

              <div className="flex justify-center rounded-lg py-10">
                <img
                  className="h-[400px] rounded-lg"
                  alt={funFact.imageName}
                  src={funFact.imageUrl}
                />
              </div>
              {/*<Image width={200} height={300} src={funFact.imageUrl} alt={funFact.imageName}/>*/}
            </div>
          </div>

          <div className="my-10 flex justify-center">
            <button
              onClick={handleRegenerate}
              className="rounded-md bg-red-500 p-2"
            >
              {" "}
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
