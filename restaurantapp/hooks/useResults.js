import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'İstanbul',
      },
    });
    setResults(response.data.businesses);
  };
/*
ek bilgiler araştırmalarım useEffect, 
React'te yan etkileri (side effects) yönetmek için kullanılan bir hook'tur.
 React komponentleri, render işlemi sırasında doğrudan bir yan etkiye neden olmazlar
 . Ancak, örneğin veri çekme, DOM güncelleme, zamanlayıcılar veya event listener'lar gibi işlemler gibi yan etkilerle ilgilenmek gerekebilir. 
 useEffect, bu tür yan etkileri yönetmek için kullanılır.Yani crud gibi işlemler onclick gibi eventlerde

*/ 
  useEffect(() => {
    searchApi('Toast');
  }, []);

  return [searchApi, results];
};
