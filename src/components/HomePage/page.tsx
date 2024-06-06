"use client"

import { Search } from "lucide-react";
import { Logo } from "./../../assets/Logo";
import { useEffect, useState } from "react";

import { getCompanies, getAssets, getLocations } from "@/utils/apiData";
import { Button } from "../Button/page";

type Company = {
  name: string
  id: string
}


export const HomePage = () => {
    const [currentCompany, setCurrentCompany] = useState('');
    const [companies, setCompanies] = useState<Company[]>([]);
    const [assets, setAssets] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        async function getData() {
            const companies = await getCompanies();
            setCompanies(companies);
            setCurrentCompany(companies[0].name);
        }
        getData()
    }, [])

    const handleChangeCompanie = async (company: object) => {
      console.log(company);
      setCurrentCompany(company.name)

      const assets = await getAssets(company.id);
      const locations = await getLocations(company.id);
      console.log(assets);
      console.log(locations);
    }


  return (
      <div className="bg-gray-400 h-full w-full">
        <div className="h-12 w-full flex flex-1 justify-between bg-slate-900">
          <div className="p-4">
            <Logo />
          </div>
          <div className="h-6 w-96 p-4 flex justify-between gap-3">
            {companies?.map((company) => (
              <Button key={company.id} label={company.name} onClick={() => handleChangeCompanie(company)}/>
            ))}
          </div>
        </div>
        <div className="h-full w-full p-4 bg-white">
          <div className="flex justify-between">
            Ativos / {currentCompany}
            <div>
              <button>Sensor de Energia</button>
              <button>Crítico</button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[479px] h-full border">
              <div className="flex items-center justify-between p-3 border">
                <input type="text" placeholder="Buscar ativo ou local" />
                <Search className="size-3" />
              </div>
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="w-[801px] h-full border">content</div>
          </div>
        </div>
      </div>
  );
};
