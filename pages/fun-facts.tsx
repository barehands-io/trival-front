import {useState} from "react";


interface Props {
    data: any;
    endpointUrl: string;
}

const fetchFunFact = async (endpointUrl: string) => {
    try {
        const res = await fetch(`${endpointUrl}/api/fun-facts`);
        return (await res.json()).data;
    } catch (error) {
        console.error(error);
        return '';
    }
};

export const getStaticProps = async () => {
    const endpointUrl = process.env.APP_ENDPOINT_URL as string;
    const data = await fetchFunFact(endpointUrl);
    return {
        props: {
            data,
            endpointUrl
        },
    };
};

export default function FunFactPage({data, endpointUrl}: Props) {
    const [funFact, setFunFact] = useState(data);
    const [loading, setLoading] = useState(false);
    const handleRegenerate = async () => {
        setLoading(true);
        const newData = await fetchFunFact(endpointUrl);

        console.log('regenerate', newData);

        setFunFact(newData);
        setLoading(false);
    }

    return (
        <div>
            {
                loading ? <div>Loading...</div> : <div>
                    <div>
                        <div className="pt-20 text-center">
                            <h1 className="text-xl py-6">Here is a Fun Fact you probably didnt know</h1>
                            <h1 className="text-xl">  {funFact}</h1>
                        </div>
                    </div>

                    <div className="flex justify-center my-10">
                        <button onClick={handleRegenerate} className="bg-red-500 p-2 rounded-md"> Regenerate</button>
                    </div>
                </div>
            }

        </div>
    );
}
