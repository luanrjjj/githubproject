
import React, {useRef,useState,useEffect} from 'react';
import initLangChart from '../Charts/'

const Canvas = (props:any) => {
    const canvasRef = useRef(null)


    useEffect(() => {
        

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            //Our first draw
            context.fillStyle = '#FFF'
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)
           //initLangChart(langData);
           
        
      }, []);
       return <canvas ref={canvasRef} {...props}/>
     
    }

    

    export { Canvas}