import React from 'react';

import css from "./index.module.css"

import { useState } from 'react';
import { useAppSelector } from 'src/hook';
import { HOST } from "../../API"
import { Histograms } from "../../DTO/Histogram"

function Search() {

    const [INNBoolen, setINNBoolen] = useState(false)
    const [INN, setINN] = useState("")

    const [TonalBoolen, setTonalBoolen] = useState(false)
    const [Tonal, setTonal] = useState("")

    const [DocumentSumBoolen, setDocumentSumBoolen] = useState(false)
    const [DocumentSum, setDocumentSum] = useState("")

    const redux = useAppSelector((state: { todos: any; }) => state.todos)


    // let date = new Date();
    const timeNow: string = "2023-03-24"



    //const autorize = false
    //let histogram:Histograms
    // {
    //     "issueDateInterval": {
    //       "startDate": "2019-01-01T00:00:00+03:00",
    //       "endDate": "2022-08-31T23:59:59+03:00"
    //     },
    //     "searchContext": {
    //       "targetSearchEntitiesContext": {
    //         "targetSearchEntities": [
    //           {
    //             "type": "company",

    //             "inn": 7710137066,
    //             "maxFullness": true

    //           }
    //         ],
    //         "onlyMainRole": true,
    //         "tonality": "any",
    //         "onlyWithRiskFactors": false


    //       }

    //     },

    //     "attributeFilters": {
    //       "excludeTechNews": true,
    //       "excludeAnnouncements": true,
    //       "excludeDigests": true
    //     },
    //     "similarMode": "duplicates",
    //     "limit": 1000,
    //     "sortType": "sourceInfluence",
    //     "sortDirectionType": "desc",
    //     "intervalType": "month",
    //     "histogramTypes": [
    //       "totalDocuments",
    //       "riskFactors"
    //     ]
    //   }
    let histogram: Histograms = {
        issueDateInterval: {
            startDate: "2019-01-01T00:00:00+03:00",
            endDate: "2022-08-31T23:59:59+03:00"
        },
        searchContext:
        {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        //  sparkId: null,
                        //   entityId: null,
                        inn: 7710137066,
                        maxFullness: true
                    }
                ],
                onlyMainRole: true,
                tonality: "any",
                onlyWithRiskFactors: false
            }
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true
        },
        similarMode: "duplicates",
        limit: 1000,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
            "totalDocuments",
            "riskFactors"
        ]
    }



    // console.log(histogram)
    //  getHistogram(histogram)


    const onChangeINN = (e: React.FormEvent<HTMLInputElement>) => {

        if (e.currentTarget.value === "") {
            setINNBoolen(false)

        } else {
            if (!/^(0|[1-9]\d*)$/.test(e.currentTarget.value)) {
                setINNBoolen(false)
            } else {

                setINNBoolen(true)
                setINN(e.currentTarget.value)
            }

        }

    }

    const onChangeDocumentSum = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === "") {
            setDocumentSumBoolen(false)
        } else {
            if (!/^(0|[1-9]\d*)$/.test(e.currentTarget.value)) {
                setDocumentSumBoolen(false)
            } else {
                setDocumentSumBoolen(true)
                setDocumentSum(e.currentTarget.value)

            }
        }
    }

    return (
        <div className={css.block} >
            <div className={css.flex}>
                <div>
                    <h1 className={css.h1_title}>?????????????? ?????????????????????? ???????????? ?? ???????? ????????????.</h1>
                    <p className={css.p_text}>?????????????? ?????????????????? ????????????.
                        ?????? ???????????? ??????????????????, ?????? ???????????? ??????????</p>
                </div>
                <div className={css.flex}>
                    <div className={css.dockPickter}>  </div>
                    <div className={css.DoubleDockPickter}></div>
                </div>


            </div>
            <div className={css.flex}>

                <section className={css.sectionBlock}>
                    <div className={css.sectionBlock_margin}>
                        <div className={css.sectionBlock_leftBlock}>
                            <p className={css.p_text}>?????? ???????????????? *</p>
                            <input className={INNBoolen ? css.input : css.inputError} onChange={onChangeINN}></input>
                            <p className={css.p_text}>??????????????????????*</p>


                            <select id="selectvalue" className={`${css.input}  ${css.p_text}`}>
                                <option className={`${css.input}  ${css.p_text}`}>????????????????????</option>
                                <option className={`${css.input}  ${css.p_text}`}>????????????????????</option>
                                <option className={`${css.input}  ${css.p_text}`}>??????????</option>
                            </select>


                            <p className={css.p_text}>???????????????????? ???????????????????? ?? ???????????? *</p>
                            <input className={DocumentSumBoolen ? css.input : css.inputError} onChange={onChangeDocumentSum}></input>

                            <p className={`${css.p_text}  ${css.dateMarginTop}`}>???????????????? ???????????? *</p>
                            <div className={css.flexDate}>
                                <input className={`${css.input}  ${css.p_text}`} type="date" max={timeNow} />
                                <input className={`${css.input} ${css.marginInput} ${css.p_text}`} type="date" max={timeNow} />
                            </div>
                        </div>
                        <div>
                            <div className={css.sectionBlock_marginRightBlock}>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales1" name="scales" className={css.chekbox} />
                                        ?????????????? ???????????????????????? ??????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales2" name="scales" className={css.chekbox} />
                                        ???????????????????? ?? ????????????-??????????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales3" name="scales" className={css.chekbox} />
                                        ???????????????????? ???????????? ?? ????????-??????????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales4" name="scales" className={css.chekbox} />
                                        ???????????????? ?????????????????????? ?????????????? ????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales5" name="scales" className={css.chekbox} />
                                        ???????????????? ???????????? ?? ??????????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales6" name="scales" className={css.chekbox} />
                                        ???????????????? ???????????? ????????????????
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales7" name="scales" className={css.chekbox} />
                                        ?????????????? ???????? ?? ????????????????????
                                    </label>
                                </div>

                                <button className={css.buttonLogIn} style={{ marginTop: "80px" }} >??????????</button>

                            </div>
                        </div>


                    </div>
                </section>



                <div className={css.rocketPic}></div>
            </div>



        </div >
    );
    function getHistogram(histogram: Histograms) {
        try {
            const options = {
                // ?????????? ???????????????????????? ?????????? POST
                method: 'POST',
                //  contentType: 'application/json',
                headers: {
                    'Content-Type': 'application/json', 'charset': 'utf-8',
                    'Authorization': "Bearer " + redux.token
                },
                // ?????????????? ???????? ??????????????
                body: JSON.stringify({
                    intervalType: histogram.intervalType,
                    histogramTypes: histogram.histogramTypes,
                    issueDateInterval: histogram.issueDateInterval,
                    searchContext: histogram.searchContext,
                    similarMode: histogram.similarMode,
                    limit: histogram.limit,
                    sortType: histogram.sortType,
                    sortDirectionType: histogram.sortDirectionType,
                    attributeFilters: histogram.attributeFilters

                })

            }
            // ???????????? ???????????? ???? ??????????????
            fetch(HOST + '/objectsearch/histograms', options)
                .then(response => {
                    if (!response.ok) {
                        //  setError( response.json.)
                        // response.json()
                        throw new Error('Error occurred!')

                    }
                    return response.json()
                })
                .then(json => {
                    var a2: string = json;
                    console.log("VALUE-", a2)


                }

                ).catch((err) => {
                    //   setError(false)

                    console.log(err, "error")
                })

        } catch {

            console.log("errrer")
        }
    }

}

export default Search;
