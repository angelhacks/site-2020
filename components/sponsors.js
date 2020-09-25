import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'Repl.it',
      link: 'https://repl.it',
      image:
        'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Freplit.png?v=1566159656031'
    },
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image:
        'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206'
    },
    {
      name: 'Frank.ly',
      link: 'https://frank.ly',
      image: 'https://angelhacks.org/static/frank-logo.png'
    },
    {
      name: 'Ad Astra',
      link: 'https://adastraschool.org',
      image: 'https://angelhacks.org/static/adastra.png'
    },
    {
      name: 'Balsamiq',
      link: 'https://balsamiq.com',
      image: 'https://angelhacks.org/static/balsamiq-logo.png'
    },
    {
      name: 'Zeit',
      link: 'https://zeit.co/',
      image: 
        'https://angelhacks.org/static/zeit-logo.png'
    },
    {
      name: 'SpaceX',
      link: 'https://spacex.com/',
      image: 
        'https://angelhacks.org/static/spacex-logo.png'
    },
    {
      name: 'Proctor & Gamble',
      link: 'https://us.pg.com/',
      image: 
        'https://angelhacks.org/static/pg-logo.png'
    },
    {
      name: 'Rolling Robots',
      link: 'https://rollingrobots.com/',
      image:
        'https://angelhacks.org/static/rollingrobots.jpg'
    },
    {
      name: 'GoGuardian',
      link: 'https://www.goguardian.com/',
      image:
        'https://angelhacks.org/static/goguardian-logo.png'
    },
    {
      name: 'National Space Society',
      link: 'https://space.nss.org/',
      image:
        'https://angelhacks.org/static/nss-logo.png'
    }
  ],
  additionalSupport: [
    {
      name: 'Sketch',
      link: 'https://sketchapp.com/',
      image: 'https://angelhacks.org/static/sketch-logo.png'
    },
    {
      name: 'Shawee',
      link: 'https://shawee.io/',
      image: 
        'https://angelhacks.org/static/shawee-logo.png'
    },
    {
      name: 'Sashido',
      link: 'https://sashido.io/',
      image: 
        'https://angelhacks.org/static/sashido-logo.png'
    },
    {
      name: 'Bugsee',
      link: 'https://bugsee.com/',
      image: 
        'https://angelhacks.org/static/bugsee-logo.png'
    },
    {
      name: 'Desmos',
      link: 'https://desmos.com/',
      image: 
        'https://angelhacks.org/static/desmos-logo.png'
    },
    {
      name: 'DeepAI',
      link: 'https://deepai.org/',
      image: 
        'https://angelhacks.org/static/deepai-logo.png'
    },
    {
      name: 'Wolfram',
      link: 'https://wolframalpha.com/',
      image: 
        'https://angelhacks.org/static/wolfram-logo.png'
    },
    {
      name: 'CloudSploit',
      link: 'https://cloudsploit.com/',
      image: 
        'https://angelhacks.org/static/cloudsploit.png'
    },
    {
      name: 'Integral Studio',
      link: 'https://integral.studio/',
      image: 
        'https://angelhacks.org/static/integral-studio.png'
    },
    {
      name: 'Sticker Mule',
      link: 'https://stickermule.com/',
      image: 
        'https://angelhacks.org/static/stickermule-logo.png'
    },
    {
      name: 'Areteem',
      link: 'https://areteem.org/',
      image: 
        'https://angelhacks.org/static/areteem-logo.jpg'
    }
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
