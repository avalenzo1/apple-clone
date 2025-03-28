import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { AmbientLight, Light } from "three"
import Lights from "./Light"
import { Suspense } from "react"
import Phone from "./Phone"
import * as THREE from 'three'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`absolute w-full h-full ${(index == 2 ) ? "right-[-100%]" : ""}`}
    >
        {/* Ambient Light */}

        <PerspectiveCamera makeDefault position={[0,0,4]}></PerspectiveCamera>

        <ambientLight intensity={0.3} />

        <Lights />

        <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group ref={groupRef} name={`${index === 1 ? "small": "large"}`} position={[0,0,0]}>
            <Suspense fallback={<Html><div>Loading...</div></Html>}>
                <Phone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
            </Suspense>
        </group>



    </View>
  )
}

export default ModelView