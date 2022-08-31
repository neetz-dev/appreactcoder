import { Button } from '@mui/material'
import React, {useState} from 'react'


export const Contador = () => {

    const [contador, setcontador] = useState(10)

    return (
    <view style={{
        textAling: 'center',
        fontSize: 40,
        top: -15
    }}>
    <div>
        Contador: {contador}
    </div>
    <Button
        title="Click"
        onPress={ () => setcontador (contador + 1)  }
    />
    </view>
    )
}
