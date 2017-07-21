precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;

const float c_redScale   = 0.298912;
const float c_greenScale = 0.586611;
const float c_blueScale  = 0.114478;
const vec3  c_grayScale = vec3(c_redScale, c_greenScale, c_blueScale);
void main()
{
	vec4 color = texture2D( s_tex0, v_texCoord );
	float grayColor = dot( color.rgb, c_grayScale );
	gl_FragColor = vec4( vec3(grayColor), color.a );
}
