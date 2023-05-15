const id = '7SEvJesIxPmBIVtZDKa8';
 
export const getScores = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    );
    const { result } = await response.json();
    return result;    
};

export const SetScores = async (data) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    },    
    );
    const { result } = await response.json();

    return result;
};