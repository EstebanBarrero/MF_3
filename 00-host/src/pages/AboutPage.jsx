import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutComponent = () => {
  return (
    <div >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaA55VTfU37RSDH87uWpuPAzFp1fq7zQtyidC04VX2jA&s" 
              alt="UPTC"
              style={{ 
                width: '310px',
                margin: '30px'
              }} 
            />
            <div style={{ 
              border: '5px solid #DDC07C', 
              margin: 0, 
              padding: 0, 
              height: '100vh' 
            }}>
              {
                <div className="text-center">
                  <h2 className="text-center mb-3"><b>UPTC</b></h2>
                  <p className="text-center">
                  <b>Mission:</b><br /><br />
                    To educate competent and ethical professionals, who are builders of a reflective, critical, and supportive citizenship in harmony with the humanistic vision of Upetecista culture, committed to promoting the development and social welfare of the region and the nation.
                    UPTC, through its activities in teaching, research, and outreach at different levels of education (undergraduate, graduate, and continuing education), and the diversity of existing knowledge, is integrated with the dynamics of the productive sector, the national government, territorial entities, and civil society, committed - within the framework of participatory democracy and peacebuilding - to the pursuit of inclusive and sustainable human development.
                    The leadership, responsibility, and social commitment of the graduates contribute to the consolidation of a more just, equitable, and democratic regional society and nation. (Agreement No. 070 of 2019).
                  </p>
                  <p className="text-center">
                  <b>Vision:</b><br /><br />
                    By 2030, due to its academic performance, UPTC will consolidate itself as one of the best public universities in Colombia and Latin America, resulting from the excellent quality of its multi-level academic offerings and the commitment of its university community to social, economic, institutional, cultural, and environmental transformations in its local, regional, and national environment.
                    Likewise, it will enhance the strength of its campus and archaeological, bibliographic, and cultural heritage as the axis of well-being for the Upetecista Community (Agreement No. 070 of 2019).
                  </p>
                    <h4>Contact:</h4>
                    <p>Dirección: Avenida Central del Norte 39-115</p>
                    <p>Atención al Ciudadano -SPQRS - Cel:318 5135940</p>
                    <p>Email: quejas.reclamos@uptc.edu.co </p>
                    <p>Línea Gratuita: 01 8000 942024 </p>
                    <p>Phone: 57 (608) 7428263 </p>
                </div>
              }
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;