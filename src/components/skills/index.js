import { Separator } from "@/components/ui/separator";

import html from "@/images/tech-logo/HTML5.svg";
import css from "@/images/tech-logo/CSS3.svg";
import javascript from "@/images/tech-logo/JavaScript.svg";
import typescript from "@/images/tech-logo/TypeScript.svg";
import flutter from "@/images/tech-logo/Flutter.svg";
import tailwind from "@/images/tech-logo/Tailwind CSS.svg";
import express from "@/images/tech-logo/Express.svg";
import kotlin from "@/images/tech-logo/Kotlin.svg";
import laravel from "@/images/tech-logo/Laravel.svg";
import mongodb from "@/images/tech-logo/MongoDB.svg";
import mysql from "@/images/tech-logo/MySQL.svg";
import next from "@/images/tech-logo/Next.js.svg";
import nodejs from "@/images/tech-logo/Node.js.svg";
import php from "@/images/tech-logo/PHP.svg";
import postgre from "@/images/tech-logo/PostgresSQL.svg";
import vite from "@/images/tech-logo/PostgresSQL.svg";
import react from "@/images/tech-logo/React.svg";
import dart from "@/images/tech-logo/Dart.svg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Flag from "react-world-flags";

const techstack = [
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
      <div className="flex flex-row gap-1 flex-wrap px-5 mb-10">
        {
          techstack.map((tech) => {
            return (
              <Card key={tech.name} className={`${isDarkMode? 'bg-neutral hover:bg-primary-content' : 'hover:bg-[color:var(--vista-blue)] bg-primary'} w-[6rem] select-none`}>
                <div className=' flex flex-col justify-center items-center gap-2 m-3 text-neutral-content'>
                  <div className="">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      height={40}
                    />
                  </div>
                  <div className="text-center min-w-fit justify-self-end text-sm">
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
          <Card className='bg-base-200 p-1 hover:bg-base-100'>
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
          <Card className='bg-base-200 p-1 hover:bg-base-100'>
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
          <Card className='bg-base-200 p-1 hover:bg-base-100'>
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
          <Card className='bg-base-200 p-1 opacity-70 hover:bg-base-100'>
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
