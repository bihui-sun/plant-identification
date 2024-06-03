import React, { useState, useRef, useEffect } from 'react'

function ImageZoomInOut({ imageUrl }) {
  //state for image scale
  const [scale, setScale] = useState(1)

  //state for image position
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //reference to the image element
  const imageRef = useRef(null)

  //zoom in function
  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1)
  }

  //zoom out function
  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1)
  }

  //effect for handling image dragging and zooming
  useEffect(() => {
    const image = imageRef.current
    let isDragging = false
    let prevPosition = { x: 0, y: 0 }

    //mouse down event handler for starting image drag
    const handleMouseDown = (e) => {
      isDragging = true
      prevPosition = { x: e.clientX, y: e.clientY }
    }

    //mouse move event handler for dragging image
    const handleMouseMove = (e) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevPosition.x
      const deltaY = e.clientY - prevPosition.y
      prevPosition = { x: e.clientX, y: e.clientY }
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }))
    }

    //mousse up event handler for ending image drag
    const handleMouseUp = () => {
      isDragging = false
    }

    //add event listeners
    image?.addEventListener('mousedown', handleMouseDown)
    image?.addEventListener('mousemove', handleMouseMove)
    image?.addEventListener('mouseup', handleMouseUp)

    //remove event listeners on component unmount
    image?.removeEventListener('mousedown', handleMouseDown)
    image?.removeEventListener('mousemove', handleMouseMove)
    image?.removeEventListener('mouseup', handleMouseUp)
  }, [imageRef, scale])

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}
    >
      <div className="btn-container">
        <button onClick={handleZoomIn}>
          <span className="material-symbols-outlined">add</span>
        </button>
        <button onClick={handleZoomOut}>
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>
      <img
        ref={imageRef}
        src={imageUrl}
        alt="img"
        style={{
          width: '50vw',
          height: 'auto',
          cursor: 'move',
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        }}
        draggable={false}
      />
    </div>
  )
}
export default ImageZoomInOut
