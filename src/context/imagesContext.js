import { createContext, useState, useEffect } from 'react';
import { getImages } from 'api/search.images';

export const Context = createContext();

export function GlobalContext({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    const fetchImages = async () => {
      const data = await getImages({ searchQuery, page, perPage });
      if (!data.hits.length) {
        throw alert('No images found');
      }
      setImages(prevState => {
        return [...prevState, ...data.hits];
      });
      setTotalImages(data.hits.length);
    };
    fetchImages();
    setIsLoading(false);
  }, [searchQuery, page, perPage]);

  const loadMoreImgs = () => {
    setPage(page + 1);
  };

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        search,
        setSearch,
        images,
        setImages,
        page,
        setPage,
        firstPage,
        setFirstPage,
        perPage,
        setPerPage,
        isLoading,
        setIsLoading,
        totalImages,
        setTotalImages,
        showModal,
        setShowModal,
        largeImage,
        setLargeImage,
        loadMoreImgs,
      }}
    >
      {children}
    </Context.Provider>
  );
}
