"use client"
import styles from '../page.module.css';
import './roadmap.css'
import { useRef } from 'react'
import Xarrow from 'react-xarrows';
import { useMediaQuery } from '@mui/material';
export default function RoadMap() {
  const node1 = useRef(null);
  const node2 = useRef(null);
  const node3 = useRef(null);
  const node4 = useRef(null);
  const node5 = useRef(null);
  const node6 = useRef(null);
  const isVerticalDesign = useMediaQuery('(max-width: 767px)');
  return (
    <div className="section roadmap XXsnipcss_extracted_selector_selectionXX snipcss0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
      <div className="grid big snipcss0-1-1-2">
      {isVerticalDesign && <div className="roadmap-head snipcss0-2-2-3">
           <div className={styles.textHeader}>Roadmap</div>
        </div>}

        <div className="roadmap-grid snipcss0-2-2-5">

          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>

          <div id="w-node-_11a9d9b9-499c-b6e4-f94a-ecaabf7dca3c-cfd6d705" className="r_wrapper snipcss0-3-5-9" >
            <img ref={node1} src="/win4/Launch.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-9-10" />
            <div className="r_head is-1 snipcss0-4-9-11">
              <div>Get <span className="snipcss0-6-12-13"></span>a BBC NFT</div>
            </div>
            <div className="r_number is-1 snipcss0-4-9-14">
              <div className="relative snipcss0-5-14-15"><div className="black-bg join snipcss0-6-15-16">
              </div>
                <div className="r_number_wrap snipcss0-6-15-17">
                  <h2 className="r_number_ snipcss0-7-17-18" >&nbsp;1.</h2>
                </div>
              </div>
            </div>
          </div>

          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          <div id="w-node-_6952819a-d937-763b-18b3-19efeb4ab8f4-cfd6d706" className="r_wrapper is-4 snipcss0-3-5-22" >
            <img ref={node6} src="/win4/Feedback.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-22-23" />
            <div className="r_head is-6 snipcss0-4-22-24">
              <div className="snipcss0-6-12-13">Community Led Features</div>
            </div>
            <div className="r_number is-6 snipcss0-4-22-26">
              <div className="relative snipcss0-5-26-27">
                <div className="black-bg join snipcss0-6-27-28">
                </div>
                <div className="r_number_wrap snipcss0-6-27-29">
                  <h2>6.</h2>
                </div>
              </div>
            </div>
          </div>

          {!isVerticalDesign ? <div className={styles.textHeader} style={{
            fontSize: '3rem',
            justifySelf: 'center',
            alignSelf: 'end'
          }}>Roadmap</div> : <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>}
          <div id="w-node-e8750180-1b6d-6d05-0cc0-a3358b45499d-cfd6d705" className="r_wrapper is-2 snipcss0-3-5-32" >
            <img ref={node2} src="/win4/Courses.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-32-33" />
            <div className="r_head is-2 snipcss0-4-32-34">
              <div className="snipcss0-6-12-13">Crypto Education</div>
            </div>
            <div className="r_number is-2 snipcss0-4-32-37">
              <div className="relative snipcss0-5-37-38">
                <div className="black-bg join snipcss0-6-38-39">
                </div>
                <div className="r_number_wrap snipcss0-6-38-40">
                  <h2>2.</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          <div id="w-node-_6952819a-d937-763b-18b3-19efeb4ab8f4-cfd6d705" className="r_wrapper is-4 snipcss0-3-5-22" >
            <img ref={node5} src="/win4/AIIntegration.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-22-23" />
            <div className="r_head is-5 snipcss0-4-22-24">
              <div className="snipcss0-6-12-13">AI Integration</div>
            </div>
            <div className="r_number is-5 snipcss0-4-22-26">
              <div className="relative snipcss0-5-26-27">
                <div className="black-bg join snipcss0-6-27-28">
                </div>
                <div className="r_number_wrap snipcss0-6-27-29">
                  <h2>5.</h2>
                </div>
              </div>
            </div>
          </div>

          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          <div id="w-node-be521726-87a9-6c90-4f0a-c781994a58b5-cfd6d705" className="r_wrapper snipcss0-3-5-45" >
            <img ref={node3} src="/win4/Analytics.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-45-46" />
            <div className="r_head is-3 snipcss0-4-45-47">
              <div className="snipcss0-6-12-13">Trading Analytics</div>
            </div>
            <div className="r_number is-3 snipcss0-4-45-49">
              <div className="relative snipcss0-5-49-50">
                <div className="black-bg join snipcss0-6-50-51">
                </div>
                <div className="r_number_wrap snipcss0-6-50-52">
                  <h2>3.</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>

          <div id="w-node-_6952819a-d937-763b-18b3-19efeb4ab8f4-cfd6d704" className="r_wrapper is-4 snipcss0-3-5-22" >
            <img ref={node4} src="/win4/Merch.png" loading="eager" width="471.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24vw, (max-width: 991px) 33vw, 29vw" alt="" className="r_image snipcss0-4-22-23" />
            <div className="r_head is-4 snipcss0-4-22-24">
              <div className="snipcss0-6-12-13">Get Merch</div >
            </div>
            <div className="r_number is-4 snipcss0-4-22-26">
              <div className="relative snipcss0-5-26-27">
                <div className="black-bg join snipcss0-6-27-28">
                </div>
                <div className="r_number_wrap snipcss0-6-27-29">
                  <h2>4.</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-fe173a83-d7e0-d378-3847-ce94e4266a80-cfd6d705" className="r_wrapper is-empty snipcss0-3-5-31"></div>
          {isVerticalDesign
            ? <Xarrow start={node1} end={node2} color="black" strokeWidth={7} startAnchor="bottom" endAnchor="top" path="straight" />
            : <Xarrow start={node1} end={node2} color="black" strokeWidth={9} />}
          {isVerticalDesign
            && <Xarrow start={node2} end={node3} color="black" strokeWidth={7} startAnchor="bottom" endAnchor="top" path="straight" />
          }
          {isVerticalDesign
            ? <Xarrow start={node3} end={node4} color="black" strokeWidth={7} startAnchor="bottom" endAnchor="top" path="straight" />
            : <Xarrow start={node3} end={node4} startAnchor="bottom" endAnchor="right" color="black" strokeWidth={9} />
          }
          {isVerticalDesign
            ? <Xarrow start={node4} end={node5} color="black" strokeWidth={7} startAnchor="bottom" endAnchor="top" path="straight" />
            : <Xarrow start={node4} end={node5} color="black" strokeWidth={9} />
          }
          {isVerticalDesign && <Xarrow start={node5} end={node6} color="black" strokeWidth={7} startAnchor="bottom" endAnchor="top" path="straight" />}
          {!isVerticalDesign && <Xarrow start={node6} end={node1} startAnchor="top" endAnchor="left" color="black" strokeWidth={9} />}
        </div>
      </div>
    </div>
  )
}