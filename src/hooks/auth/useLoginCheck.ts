const useLoginCheck = () => !!localStorage.getItem('token');
export default useLoginCheck;
