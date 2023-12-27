import "./dowloadfilevoca.scss"


const DowloadFileVoca = ({ vocabularyData }) =>{




    const downloadVocabulary = () => {
        // Assuming vocabularyData is an array of vocabulary objects
        const content = vocabularyData.map((word) => `${word.voca_eng}: ${word.voca_vi}`).join('\n');
        const fileName = 'my_vocabulary.txt';
        const contentType = 'text/plain';
    
        const blob = new Blob([content], { type: contentType });
    
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
      return (
        <button className="button-dowload" onClick={downloadVocabulary}>
          Download 
        </button>
      );


}
export default DowloadFileVoca