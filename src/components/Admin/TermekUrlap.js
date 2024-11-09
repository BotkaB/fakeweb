import React from 'react'

export default function TermekUrlap() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Termék neve</label>
                    <input type="text" className="form-control" id="title" aria-describedby="title Help" />

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

/*id: 1,
    title: '...',
        price: '...',
            category: '...',
                description: '...',
                    image: '...'*/
