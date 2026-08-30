import { Separator } from "@/components/ui/separator";

import html from "@/images/tech-logo/HTML5.svg";
import css from "@/images/tech-logo/CSS3.svg";
import javascript from "@/images/tech-logo/JavaScript.svg";
import typescript from "@/images/tech-logo/TypeScript.svg";
import flutter from "@/images/tech-logo/Flutter.svg";
import tailwind from "@/images/tech-logo/Tailwind CSS.svg";
import kotlin from "@/images/tech-logo/Kotlin.svg";
import laravel from "@/images/tech-logo/Laravel.svg";
import mongodb from "@/images/tech-logo/MongoDB.svg";
import mysql from "@/images/tech-logo/MySQL.svg";
import next from "@/images/tech-logo/Next.js.svg";
import nodejs from "@/images/tech-logo/Node.js.svg";
import php from "@/images/tech-logo/PHP.svg";
import react from "@/images/tech-logo/React.svg";
import cpp from "@/images/tech-logo/CPlusPlus.svg";
import matlab from "@/images/tech-logo/MATLAB.svg";
import opencv from "@/images/tech-logo/OpenCV.svg";
import python from "@/images/tech-logo/Python.svg";
import carla from "@/images/tech-logo/CARLA.png";
import verification from "@/images/tech-logo/Verification.svg";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Flag from "react-world-flags";

const techstack = [
  {
    'name': 'C++',
    'logo': cpp
  },
  {
    'name': 'Python',
    'logo': python
  },
  {
    'name': 'MATLAB / Simulink',
    'logo': matlab
  },
  {
    'name': 'CARLA',
    'logo': carla
  },
  {
    'name': 'OpenCV',
    'logo': opencv
  },
  {
    'name': 'MIL · SIL · HIL',
    'logo': verification
  },
  {
    'name': 'HTML',
    'logo': html
  },
  {
    'name': 'CSS',
    'logo': css
  },
  {
    'name': 'JavaScript',
    'logo': javascript
  },
  {
    'name': 'TypeScript',
    'logo': typescript
  },
  {
    'name': 'React',
    'logo': react
  },
  {
    'name': 'Next.js',
    'logo': next
  },
  {
    'name': 'Flutter',
    'logo': flutter
  },
  {
    'name': 'Node.js',
    'logo': nodejs
  },
  {
    'name': 'MongoDB',
    'logo': mongodb
  },
  {
    'name': 'MySQL',
    'logo': mysql
  },
  {
    'name': 'PHP',
    'logo': php
  },
  {
    'name': 'Tailwind',
    'logo': tailwind
  },
  {
    'name': 'Kotlin',
    'logo': kotlin
  },
  {
    'name': 'Laravel',
    'logo': laravel
  },
]

export default function Skills({language, isDarkMode}) {
  return (
    <div className='flex flex-col'>
      <h2 className="text-2xl px-7 mb-5">
        {
          language=='japanese'
          ?'スキル'
          :'skills'
        }
      </h2>
      <div className='px-7 mb-3'>
        <Separator />
      </div>
      <div className="grid grid-cols-3 gap-2 px-5 mb-10 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          techstack.map((tech) => {
            return (
              <Card key={tech.name} className="min-w-0 select-none !bg-base-100 text-base-content transition-colors hover:!bg-base-200">
                <div className='flex min-h-[78px] flex-col justify-center items-center gap-2 p-2 text-base-content'>
                  <div className="grid h-9 place-items-center">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <div className="text-center justify-self-end text-xs leading-tight">
                    {tech.name}
                  </div>
                </div>
              </Card>
            )
          })
        }
      </div>
      <h2 className="text-2xl px-5 mb-5">
        {
          language=='japanese'
          ?'人間言語'
          :'human languages'
        }
      </h2>
      <div className='px-7 mb-3'>
        <Separator />
      </div>
      <div className="flex flex-col gap-2 select-none px-7 mb-3">
        <div className="flex flex-row gap-2 flex-wrap">
          <Card className='!bg-base-100 p-1 hover:!bg-base-200'>
            <div className="flex flex-row w-fit justify-center items-center gap-2  px-1 text-base-content">
              <div className="w-7">
                <Flag code='GB'/>
              </div>
              {
                language=='japanese'
                ?'英語'
                :'English'
              }
              <span className="text-base-content opacity-50 ">
                {
                  language=='japanese'
                  ?'ビジネス'
                  :'Fluent'
                }
              </span>
            </div>
          </Card>
          <Card className='!bg-base-100 p-1 hover:!bg-base-200'>
            <div className="flex flex-row w-fit justify-center items-center gap-2  px-1 text-base-content">
              <div className="w-7">
                <Flag code='JP'/>
              </div>
              {
                language=='japanese'
                ?'日本語'
                :'Japanese'
              }
              <span className="text-base-content opacity-50 ">
                {
                  language=='japanese'
                  ?'ビジネス | JLPT 一級'
                  :'Fluent | JLPT N1'
                }
                </span>
            </div>
          </Card>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          <Card className='!bg-base-100 p-1 hover:!bg-base-200'>
            <div className="flex flex-row w-fit justify-center items-center gap-2  px-1 text-base-content">
              <div className="w-7">
                <Flag code='ID'/>
              </div>
              {
                language=='japanese'
                ?'インドネシア語'
                :'Indonesian'
              }    
              <span className="text-base-content opacity-50 ">
                {
                  language=='japanese'
                  ?'ネイティブ'
                  :'Native'
                }
              </span>
            </div>
          </Card>
          <Card className='!bg-base-100 p-1 hover:!bg-base-200'>
            <div className="flex flex-row w-fit justify-center items-center gap-2  px-1 text-base-content">
              {
                language=='japanese'
                ?'スンダ語'
                :'Sundanese'
              }
              <span className="text-base-content opacity-50 ">
                {
                  language=='japanese'
                  ?'ネイティブ'
                  :'Native'
                }
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
