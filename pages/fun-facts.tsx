
export const getStaticProps = async () => {
    try {
        const res = await fetch(`${process.env.APP_ENDPOINT_URL}/api/ping`);
        const data = (await res.json()) as string;
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        return {
            props: {
                data:[]
            },
        };
    }
};

interface Props {
    data: any;
}

export default function HelpPage  ({data}:Props) {
  return (
    <div>
      <h1>Fun facts about scotland   {JSON.stringify(data)}</h1>
    </div>
  );
}
