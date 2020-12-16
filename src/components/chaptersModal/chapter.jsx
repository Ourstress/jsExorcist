function Chapter() {
  const data = [
    {
      name: "Chapter 1",
      content: "This is! <code>print('hello world abacadabra')</code>",
    },
    // {
    //   name: "Chapter 2",
    //   content: "dummy data",
    // },
  ];
  return (
    <section>
      <div className="accordion" id="chapterAccordion" aria-label="accordion">
        {data.map((dataItem, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={"heading" + index}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="false"
                aria-controls={"collapse" + index}
              >
                {dataItem.name}
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              aria-labelledby={"heading" + index}
              data-bs-parent="#chapterAccordion"
            >
              <div className="accordion-body">{dataItem.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chapter;
