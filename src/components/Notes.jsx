import "./Notes.css";

const notes = [
    {
        number:'01',
        layer:'Top',
        name:"Bergamot",
        description:"The first breath. Bright and green, gone within the hour."
    },
    {
        number:'02',
        layer:'Heart',
        name:'Night Jasmine',
        description:'The flower itself, picked at 9:40 PM while it is still opening.'
    },
    {
        number:'03',
        layer:'Base',
        name:'Sandalwood',
        description:"Warm and soft. What stays on your skin until morning."
    },
]

function Notes() {
    return (
        <section className="notes" id="notes">
            <div className="notes__header">
                <p className="notes__eyebrow">The Notes</p>
                <h2 className="notes__title">
                    What you'll <em>smell</em>
                </h2>
            </div>

            <ol className="notes__list">
                {notes.map((note) => (
                    <li className="note" key={note.number}>
                        <span className="note__number">{note.number}</span>
                        <h3 className="note__layer">{note.layer} note</h3>
                        <p className="note__description">{note.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Notes;