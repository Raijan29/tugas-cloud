import React from 'react';
import Headers from '../components/headers';


const Tentangkami = () => {
  return (

    
    
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as landing page */}
      
    <Headers />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Tentang Kami</h1>
            
            <section> 

            </section>
            {/* Sejarah Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sejarah Lembaga Kesenian Bunga Tanjung</h2>
              <p className="mb-4 text-gray-600">
                Lembaga Kesenian Bunga Tanjung didirikan pada tahun 1985 oleh sekelompok seniman yang peduli dengan pelestarian seni tari tradisional Indonesia. Berawal dari sanggar kecil di Jakarta, kami telah berkembang menjadi salah satu lembaga kesenian terkemuka di Indonesia.
              </p>
              <p className="text-gray-600">
                Nama "Bunga Tanjung" dipilih sebagai simbol keindahan dan keanggunan yang kami usung dalam setiap pertunjukan dan pelatihan yang kami berikan. Selama lebih dari 35 tahun, kami telah melatih ribuan penari dan menyelenggarakan ratusan pertunjukan di dalam maupun luar negeri.
              </p>
            </section>
            
            {/* Misi & Visi Section */}
            <section className="mb-16">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Misi & Visi</h2>
                  <h5 className="text-xl font-bold mb-3 text-purple-600">Misi Kami:</h5>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-600">
                        Melestarikan dan mengembangkan seni tari tradisional Indonesia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-600">
                        Menyediakan wadah bagi seniman tari untuk berkarya dan berkembang
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-600">
                        Mengedukasi masyarakat tentang kekayaan seni budaya Indonesia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-600">
                        Menyelenggarakan pertunjukan dan pelatihan berkualitas tinggi
                      </span>
                    </li>
                  </ul>
                  <h5 className="text-xl font-bold mb-3 text-purple-600">Visi Kami:</h5>
                  <p className="text-gray-600">
                    Menjadi pusat keunggulan dalam pelestarian, pengembangan, dan penyebarluasan seni tari tradisional Indonesia di tingkat nasional dan internasional.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="misi-visi.jpg" 
                    alt="Misi dan Visi" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
            
            {/* Tim Section */}
            <section>
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Tim Kami</h2>
              
              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-purple-100">
                    <img 
                      src="team1.jpg" 
                      alt="Ketua Lembaga" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">Dr. Siti Aminah</h3>
                  <p className="text-purple-600 font-medium text-center mb-4">Ketua Lembaga</p>
                  <p className="text-gray-600 text-center">
                    Penggagas utama dan pendiri Lembaga Kesenian Bunga Tanjung dengan pengalaman lebih dari 30 tahun di dunia tari tradisional.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-purple-100">
                    <img 
                      src="team2.jpg" 
                      alt="Kepala Pelatih" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">Bambang Setiawan</h3>
                  <p className="text-purple-600 font-medium text-center mb-4">Kepala Pelatih</p>
                  <p className="text-gray-600 text-center">
                    Ahli tari tradisional Jawa dengan spesialisasi tari klasik keraton, telah melatih lebih dari 500 penari profesional.
                  </p>
                </div>
                
                {/* Team Member 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-purple-100">
                    <img 
                      src="team3.jpg" 
                      alt="Manajer Operasional" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">Dewi Lestari</h3>
                  <p className="text-purple-600 font-medium text-center mb-4">Manajer Operasional</p>
                  <p className="text-gray-600 text-center">
                    Mengelola semua aspek operasional lembaga dengan fokus pada pengembangan program dan kerjasama dengan berbagai institusi.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer - Same as landing page */}
    </div>
  );
};

export default Tentangkami;