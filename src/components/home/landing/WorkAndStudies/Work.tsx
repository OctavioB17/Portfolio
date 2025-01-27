import { Box } from '@mui/material'
import React from 'react'
import ExperiencesBox from './ExperiencesBox'
import Culzoni from '../../../../assets/images/WorkAndStudies/Logo_Culzoni_Sin_Slogan.png'

const Work: React.FC = (): JSX.Element => {

  const culzoniDescription: string = 'Lorem ipsum dolor sit amet cosnsectetur adipisicing elit. Eius corrupti, facilis natus adipisci placeat autem itaque? Assumenda inventore pariatur ullam rem ad debitis impedit temporibus. Corporis saepe officiis ut optio. Ad sequi quae dolorum sunt eum quidem quod, expedita dicta sit harum omnis, culpa repellat! At esse dolor asperiores repellendus nam. Tempore iusto modi fugiat laudantium eius error neque sunt. Maiores cupiditate illo explicabo tempora voluptas error, vel perspiciatis nemo unde, eveniet dignissimos similique quos amet quis repellat. Doloremque quasi quod fugiat quae cumque magnam dolores voluptate! Voluptas, velit amet. Harum, vero aut rerum blanditiis commodi iure quidem ipsam quia officiis dolorem labore distinctio dolorum eius deserunt, impedit, mollitia modi praesentium sint recusandae veritatis. Laudantium consequuntur quis reiciendis eaque laborum. Quia, quod necessitatibus alias praesentium veritatis laudantium. Tenetur doloremque voluptatibus quaerat recusandae cum reprehenderit commodi a? Dignissimos ea sunt iure? Eum harum exercitationem accusantium iure accusamus quibusdam repudiandae rerum quasi. Perferendis impedit in excepturi, quae et aliquid maxime illo expedita repudiandae nobis debitis pariatur nostrum fugit ab tempora explicabo repellendus eligendi porro error, accusamus ipsum ea officiis. Possimus, magni delectus!'


  return (  
    <Box>
        <ExperiencesBox photo={Culzoni} institution='Culzoni' title='Full-stack JS Developer - Digital Marketing' date='09/12/2023 - Now' description={culzoniDescription}/>
    </Box>
  )
}

export default Work